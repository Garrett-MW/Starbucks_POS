const enter_btn = document.getElementById('enter_btn');
const pop_up_container = document.getElementById('pop_up_container');
const pin_enter = document.getElementById('pin_enter_btn');
const num_btns = document.querySelectorAll('.num_pad');
const pin_btns = document.querySelectorAll('.pin_pad');
const partner_pin = document.getElementById('partner_pin');
const clear_btn = document.getElementById('clear_btn');
const pin_clear_btn = document.getElementById('pin_clear_btn');
const exit_btn = document.getElementById('exit');
const date_time = document.getElementById('date_time');
const pin_input = document.getElementById('partner_pin');
const partner_num = document.getElementById('partner_num');
const drawers = document.querySelectorAll('.drawer');
let selected_drawer = 0;
const drawer1 = document.getElementById('assigned_partner1');
const drawer2 = document.getElementById('assigned_partner2');


num_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        partner_num.value += btn.value;
    });
});


pin_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        pin_input.value += btn.value;
    });
});


clear_btn.addEventListener('click', () => {
    partner_num.value = '';
});


exit_btn.addEventListener('click', async function () {
    const drawer_key = selected_drawer.toString();
    const response = await fetch(`/session/${drawer_key}`, { method: 'POST' });
    const session = await response.json();

    if (session.success) {
        window.location.reload();
    } else {
        const logoutResponse = await fetch(`/logout/${drawer_key}`, { method: 'DELETE' });
        const data = await logoutResponse.json();
        if (data.success) {
            localStorage.removeItem(drawer_key);
            await check_drawer_status();
            window.location.reload();
        } else {
            alert(data.error || 'Error logging out');
        }
    }
});

pin_clear_btn.addEventListener('click', () => {
    pin_input.value = '';
});


drawers.forEach(drawer => {
    drawer.addEventListener('click', async function () {
        selected_drawer = drawer.value;
        const drawer_key = selected_drawer.toString()
        const response = await fetch('/sessions', { method: 'POST' });
        const session = await response.json();
        const drawer_session = session[drawer_key];
        if (drawer_session) {
            partner_num.value = drawer_session.partner_num;
            pop_up_container.hidden = false;
        }
        else {
            return;
        }
    });
});


enter_btn.addEventListener('click', async function verify_partner_num() {
    const drawer_assigned = await return_open_drawer(selected_drawer);
    selected_drawer = drawer_assigned
    if (drawer_assigned === 0) {
        alert('All Drawers Assigned');
        partner_num = '';
        return;
    }
    else {
        try {
            const response = await fetch(`/login/${partner_num.value}/${drawer_assigned}`, { method: 'POST' });
            const data = await response.json();

            if (data.success) {
                const drawer_key = drawer_assigned.toString()
                const partner = {
                    partner_num: data.partner_num,
                    name: `${data.first_name} ${data.last_name}`
                }
                localStorage.setItem(drawer_key, JSON.stringify(partner));
                pop_up_container.hidden = false;

            } else {
                partner_num.value = '';
                alert(data['error']);
                return;

            }
        }
        catch (error) {
            partner_num.value = '';
            alert(error);
            return;
        }
    }
});



pin_enter.addEventListener('click', verify_partner_pin);
async function verify_partner_pin() {
    const drawer_key = selected_drawer.toString()
    const session_data = localStorage.getItem(drawer_key)
    const response = await fetch(`/login/${session_data}/${pin_input.value}/${selected_drawer}`, { method: 'POST' });
    const data = await response.json();
    if (data.success) {
        selected_drawer = 0;
        window.location.href = '/order';
    } else {
        selected_drawer = 0;
        pin_input.value = '';
        sessionStorage.removeItem(drawer_key);
        alert(data['error']);
        return;
    }
}


async function return_open_drawer(drawer_num) {
    const response = await fetch('/sessions', { method: 'POST' });
    const session = await response.json();
    if (drawer_num == 0) {
        if (session["1"]) {
            if (session["2"]) {
                alert('All Drawers Assigned, Try Another');
                return 0;
            }
            else {
                return 2;
            }
        }
        else {
            return 1;
        }
    }
    else if (drawer_num == 1) {
        if (session["1"]) {
            if (session["2"]) {
                alert('All Drawers Assigned, Try Another');
                selected_drawer = 0;
                return 0;
            }
        } else {
            return 1;
        }
    }
    else if (drawer_num == 2) {
        if (session["2"]) {
            if (session["1"]) {
                alert('All Drawers Assigned, Try Another');
                selected_drawer = 0;
                return 0;
            }
        } else {
            return 2;
        }
    }
};


async function check_drawer_status() {
    const response = await fetch('/sessions', { method: 'POST' });
    const session = await response.json();
    if (session["1"]) {
        drawer1.textContent = session["1"]['name'];
    }
    else {
        drawer1.textContent = 'unassigned';
    }

    if (session["2"]) {
        drawer2.textContent = session["2"]['name'];
    }
    else {
        drawer2.textContent = 'unassigned';
    }

}


window.addEventListener('pageshow', () => {
    check_drawer_status()
    const date = new Date();
    date_time.textContent = `${date.toDateString()} / ${date.toLocaleTimeString()}`;
});

