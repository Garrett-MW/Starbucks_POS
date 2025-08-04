'use strict'
//  MAIN.HTML

const item_search_div = document.querySelector('#item_search_div');
const item_type_div = document.querySelector('#item_type_div');
const category_btns = document.querySelectorAll('.category_btn');
const bev_type = document.getElementById('bev_type');

let food_data = null;
let rtde_data = null;
let drink_data = null;
let beans_data = null;


async function load_food() {
    try {
        const response = await fetch('/data/food');
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        return;
    }

};

async function load_rtde() {
    try {
        const response = await fetch('/data/rtde');
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        return;
    }
};

async function load_beans() {
    try {
        const response = await fetch('/data/beans');
        const data = await response.json()
        return data;

    } catch (error) {
        console.error(error);
        return;
    }

};

async function load_drinks() {
    try {
        const response = await fetch('/data/drinks');
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
        return;
    }
};


category_btns.forEach(btn => {
    const name = btn.value;
    btn.addEventListener('click', async function () {

        switch (name) {

            case "food":

                const food_data = await load_food();

                bev_type.innerHTML = " ";
                item_type_div.innerHTML = " ";

                const food_btns = [
                    { value: 'pastries', label: 'Pastries' },
                    { value: 'loaves', label: 'Loaves & Cakes' },
                    { value: 'croissants', label: 'Bagels & Croissants' },
                    { value: 'lunch', label: 'Lunch & Snacks' },
                    { value: 'brownies', label: 'Brownies & Cookies' },
                    { value: 'breakfast', label: 'Hot Breakfast' }

                ]
                food_btns.forEach(btn => {
                    const food_btn = document.createElement('button');
                    food_btn.className = 'item_type';
                    food_btn.value = btn.value;
                    food_btn.textContent = btn.label;
                    food_btn.addEventListener('click', () => {

                        const name = btn.value;
                        switch (name) {

                            case "pastries":

                                items_div.innerHTML = '';
                                const pastries_data = food_data.pastries;

                                const pastries_div = document.createElement('div');
                                pastries_div.className = 'food_div';

                                pastries_data.forEach(pastry => {

                                    const pastry_btn = document.createElement('button');
                                    pastry_btn.className = 'food_btn';
                                    pastry_btn.textContent = pastry.item_name;
                                    pastry_btn.value = pastry.price;

                                    pastry_btn.addEventListener('click', () => {
                                        console.log(`${pastry_btn.textContent} btn clicked`);
                                    });

                                    pastries_div.appendChild(pastry_btn);
                                });

                                items_div.appendChild(pastries_div);


                                break;


                            case "loaves":

                                items_div.innerHTML = '';
                                const loaves_data = food_data.loaves;

                                const loaves_div = document.createElement('div');
                                loaves_div.className = 'food_div';

                                loaves_data.forEach(loaf => {

                                    const loaf_btn = document.createElement('button');
                                    loaf_btn.className = 'food_btn';
                                    loaf_btn.textContent = loaf.item_name;
                                    loaf_btn.value = loaf.price;

                                    loaf_btn.addEventListener('click', () => {
                                        console.log(`${loaf_btn.textContent} btn clicked`)
                                    });

                                    loaves_div.appendChild(loaf_btn);
                                });

                                items_div.appendChild(loaves_div);

                                break;


                            case "croissants":

                                items_div.innerHTML = '';
                                const croissants_data = food_data.croissants;

                                const croissants_div = document.createElement('div');
                                croissants_div.className = 'food_div';

                                croissants_data.forEach(croissant => {

                                    const croissant_btn = document.createElement('button');
                                    croissant_btn.className = 'food_btn';
                                    croissant_btn.textContent = croissant.item_name;
                                    croissant_btn.value = croissant.price;

                                    croissant_btn.addEventListener('click', () => {
                                        console.log(`${croissant_btn.textContent} btn clicked`)
                                    });

                                    croissants_div.appendChild(croissant_btn);
                                });

                                items_div.appendChild(croissants_div);

                                break;


                            case "lunch":

                                items_div.innerHTML = '';
                                const lunch_data = food_data.lunch;

                                const lunch_div = document.createElement('div');
                                lunch_div.className = 'food_div';

                                lunch_data.forEach(item => {

                                    const lunch_btn = document.createElement('button');
                                    lunch_btn.className = 'food_btn';
                                    lunch_btn.textContent = item.item_name;
                                    lunch_btn.value = item.price;

                                    lunch_btn.addEventListener('click', () => {
                                        console.log(`${lunch_btn.textContent} btn clicked`)
                                    });

                                    lunch_div.appendChild(lunch_btn);
                                });

                                items_div.appendChild(lunch_div);

                                break;


                            case "brownies":

                                items_div.innerHTML = '';
                                const brownies_data = food_data.brownies;

                                const brownies_div = document.createElement('div');
                                brownies_div.className = 'food_div';

                                brownies_data.forEach(brownie => {

                                    const brownie_btn = document.createElement('button');
                                    brownie_btn.className = 'food_btn';
                                    brownie_btn.textContent = brownie.item_name;
                                    brownie_btn.value = brownie.price;

                                    brownie_btn.addEventListener('click', () => {
                                        console.log(`${brownie_btn.textContent} btn clicked`)
                                    });

                                    brownies_div.appendChild(brownie_btn);
                                });

                                items_div.appendChild(brownies_div);

                                break;


                            case "breakfast":

                                items_div.innerHTML = '';
                                const breakfast_data = food_data.breakfast;

                                const breakfast_div = document.createElement('div');
                                breakfast_div.className = 'food_div';

                                breakfast_data.forEach(item => {

                                    const breakfast_btn = document.createElement('button');
                                    breakfast_btn.className = 'food_btn'
                                    breakfast_btn.textContent = item.item_name;
                                    breakfast_btn.value = item.price;

                                    breakfast_btn.addEventListener('click', () => {
                                        console.log(`${breakfast_btn.textContent} btn clicked`)
                                    });

                                    breakfast_div.appendChild(breakfast_btn);
                                });

                                items_div.appendChild(breakfast_div);

                                break;

                            default:
                                break

                        }
                    });
                    item_type_div.appendChild(food_btn);
                });

                setFirstItemTypeToClick('pastries');
                break;



            case "rtde":

                const rtde_data = await load_rtde();
                bev_type.innerHTML = " ";
                item_type_div.innerHTML = " ";

                const rtde_btns = [
                    { value: 'juice', label: 'Coffee, Juice & Milk' },
                    { value: 'soda', label: 'Water & Soda' },
                    { value: 'impulse', label: 'Impulse Items' },
                    { value: 'regional', label: 'Regional & Test' }
                ]
                rtde_btns.forEach(btn => {
                    const rtde_btn = document.createElement('button');
                    rtde_btn.className = 'item_type';
                    rtde_btn.value = btn.value;
                    rtde_btn.textContent = btn.label;
                    rtde_btn.addEventListener('click', () => {
                        const name = btn.value;
                        switch (name) {

                            case "juice":

                                items_div.innerHTML = '';
                                const juice_data = rtde_data.juice;

                                const juice_div = document.createElement('div');
                                juice_data.className = 'rtde_div';

                                juice_data.forEach(juice => {
                                    const juice_btn = document.createElement('button');
                                    juice_btn.className = 'rdte_btn';
                                    juice_btn.textContent = juice.item_name;
                                    juice_btn.value = juice.price;

                                    juice_btn.addEventListener('click', () => {
                                        console.log(`${juice_btn.textContent} btn clicked`);
                                    });

                                    juice_div.appendChild(juice_btn)
                                });

                                items_div.appendChild(juice_div);


                                break;


                            case "soda":

                                items_div.innerHTML = '';
                                const soda_data = rtde_data.soda;

                                const soda_div = document.createElement('div');
                                soda_div.className = 'rtde_div';

                                soda_data.forEach(soda => {
                                    const soda_btn = document.createElement('button');
                                    soda_btn.className = 'rtde_btn';
                                    soda_btn.textContent = soda.item_name;
                                    soda_btn.value = soda.price;

                                    soda_btn.addEventListener('click', () => {
                                        console.log(`${soda_btn.textContent} btn clicked`);
                                    });

                                    soda_div.appendChild(soda_btn)
                                });

                                items_div.appendChild(soda_div);

                                break;


                            case "impulse":

                                items_div.innerHTML = '';
                                const impulse_data = rtde_data.impulse;

                                const impulse_div = document.createElement('div');
                                impulse_div.className = 'rtde_div';

                                impulse_data.forEach(impulse => {
                                    const impulse_btn = document.createElement('button');
                                    impulse_btn.className = 'rtde_btn';
                                    impulse_btn.textContent = impulse.item_name;
                                    impulse_btn.value = impulse.price;

                                    impulse_btn.addEventListener('click', () => {
                                        console.log(`${impulse_btn.textContent} btn clicked`);
                                    });

                                    impulse_div.appendChild(impulse_btn);
                                });

                                items_div.appendChild(impulse_div);

                                break;


                            case "regional":

                                items_div.innerHTML = '';
                                const regional_data = rtde_data.regional;

                                const regional_div = document.createElement('div');
                                regional_div.className = 'rtde_div';

                                regional_data.forEach(item => {
                                    const regional_btn = document.createElement('button');
                                    regional_btn.className = 'rtde_btn';
                                    regional_btn.textContent = item.item_name;
                                    regional_btn.value = item.price;

                                    regional_btn.addEventListener('click', () => {
                                        console.log(`${regional_btn.textContent} btn clicked`);
                                    });

                                    regional_div.appendChild(regional_btn);
                                });

                                items_div.appendChild(regional_div);

                                break;


                            default:
                                break

                        }
                    });
                    item_type_div.appendChild(rtde_btn);

                });

                setFirstItemTypeToClick('juice');
                break;



            case "misc":

                bev_type.innerHTML = "";
                item_type_div.innerHTML = " ";

                const misc_btns = [
                    { value: 'loyalty', label: 'Cards & Loyalty' },
                    { value: 'bulk', label: 'Bulk Brewed' },
                    { value: 'donations', label: 'Donations & Fees' },
                    { value: 'test', label: 'Non-Drink Test Items' }
                ]
                misc_btns.forEach(btn => {
                    const misc_btn = document.createElement('button');
                    misc_btn.className = 'item_type';
                    misc_btn.value = btn.value;
                    misc_btn.textContent = btn.label;
                    misc_btn.addEventListener('click', () => {
                        const name = misc_btn.value;
                        switch (name) {

                            case "loyalty":

                                items_div.innerHTML = '';

                                const loyalty_div = document.createElement('div');
                                loyalty_div.id = 'loyalty_div';
                                const card_btns_div = document.createElement('div');
                                card_btns_div.id = 'card_btns_div';
                                const card_btns = [
                                    { label: 'ACTIVATE New Starbucks Card', value: 'activate' },
                                    { label: 'RELOAD Starbucks Card', value: 'reload' },
                                    { label: 'ACTIVATE New Service Recovery Card', value: 'recovery' }
                                ];
                                card_btns.forEach(btn => {
                                    const card_btn = document.createElement('button');
                                    card_btn.className = 'card_btn';
                                    card_btn.value = btn.value;
                                    card_btn.textContent = btn.label;
                                    card_btns_div.appendChild(card_btn);

                                    card_btn.addEventListener('click', () => {
                                        const name = card_btn.value;
                                        switch (name) {
                                            case 'activate':
                                                console.log('activate giftcard btn clicked');
                                                break;

                                            case 'reload':
                                                console.log('reload giftcard btn clicked');
                                                break;

                                            case 'recovery':
                                                console.log('recovery card btn clicked');
                                                break;

                                            default:
                                                break;

                                        }
                                    });
                                });

                                const loyalty_btns_div = document.createElement('div');
                                loyalty_btns_div.id = 'loyalty_btns_div';
                                const loyalty_btns = [
                                    { value: 'balance', label: 'Balance Inquiry' },
                                    { value: 'member', label: 'Member Profile' }
                                ]
                                loyalty_btns.forEach(btn => {
                                    const loyalty_btn = document.createElement('button');
                                    loyalty_btn.className = 'loyalty_btn';
                                    loyalty_btn.value = btn.value;
                                    loyalty_btn.textContent = btn.label;
                                    loyalty_btns_div.appendChild(loyalty_btn);

                                    loyalty_btn.addEventListener('click', () => {
                                        const name = loyalty_btn.value;
                                        switch (name) {
                                            case 'balance':
                                                console.log('giftcard balance btn clicked');
                                                break;

                                            case 'member':
                                                console.log('member account btn clicked');
                                                break;

                                            default:
                                                break;

                                        }
                                    });
                                });
                                loyalty_div.appendChild(card_btns_div);
                                loyalty_div.appendChild(loyalty_btns_div);

                                items_div.appendChild(loyalty_div)
                                break;


                            case "bulk":

                                items_div.innerHTML = ' '

                                const bulk_div = document.createElement('div');
                                bulk_div.id = 'bulk_div';

                                const bulk_row1 = document.createElement('div');
                                bulk_row1.className = 'bulk_row';
                                const bulk_row1_btn = document.createElement('button');
                                bulk_row1_btn.className = 'bulk_btn';
                                bulk_row1_btn.textContent = 'Coffee Traveler';
                                bulk_row1_btn.value = 'traveler';
                                bulk_row1.appendChild(bulk_row1_btn);

                                bulk_row1_btn.addEventListener('click', () => {
                                    items_div.innerHTML = '<h2>Traveler</h2>';
                                    console.log(`${bulk_row1_btn.value} btn clicked`);
                                });


                                const bulk_row2 = document.createElement('div');
                                bulk_row2.className = 'bulk_row';
                                const bulk_row2_btns = [
                                    { value: '8cup', label: '8 Cup Press' },
                                    { value: 'reserve_8cup', label: 'Reserve 8 Cup Press' },
                                    { value: '12cup', label: '12 Cup Press' },
                                    { value: 'airpot', label: 'Airpot' }
                                ];

                                bulk_row2_btns.forEach(btn => {
                                    const bulk_row2_btn = document.createElement('button');
                                    bulk_row2_btn.className = 'bulk_btn';
                                    bulk_row2_btn.value = btn.value;
                                    bulk_row2_btn.textContent = btn.label;
                                    bulk_row2.appendChild(bulk_row2_btn);

                                    bulk_row2_btn.addEventListener('click', () => {
                                        console.log(`${bulk_row2_btn.textContent} btn clicked`);
                                    });
                                });

                                const bulk_row3 = document.createElement('div');
                                bulk_row3.className = 'bulk_row';
                                const bulk_row3_btns = [
                                    { value: '1cambro', label: '1 Gallon Cambro' },
                                    { value: '2.5cambro', label: '2.5 Gallon Cambro' },
                                    { value: '5cambro', label: '5 Gallon Cambro' }
                                ];
                                bulk_row3_btns.forEach(btn => {
                                    const bulk_row3_btn = document.createElement('button');
                                    bulk_row3_btn.className = 'bulk_btn';
                                    bulk_row3_btn.value = btn.value;
                                    bulk_row3_btn.textContent = btn.label;
                                    bulk_row3.appendChild(bulk_row3_btn);
                                    bulk_row3_btn.addEventListener('click', () => {
                                        console.log(`${bulk_row3_btn.textContent} btn clicked`);
                                    });
                                });
                                bulk_div.appendChild(bulk_row1);
                                bulk_div.appendChild(bulk_row2);
                                bulk_div.appendChild(bulk_row3);

                                items_div.appendChild(bulk_div);
                                break;


                            case "donations":

                                items_div.innerHTML = ' ';

                                const donations_div = document.createElement('div');
                                donations_div.id = 'donations_div';

                                const donations_row1 = document.createElement('div');
                                donations_row1.className = 'donations_row';
                                const donations_row1_btns = [
                                    { value: 'cupFund', label: 'Cup Fund' },
                                    { value: 'foodPickup', label: 'Food Agency Pick Up' },
                                    { value: 'redCross', label: 'Red Cross' }
                                ];
                                donations_row1_btns.forEach(btn => {
                                    const donations_row1_btn = document.createElement('button');
                                    donations_row1_btn.className = 'donations_btn';
                                    donations_row1_btn.value = btn.value;
                                    donations_row1_btn.textContent = btn.label;
                                    donations_row1.appendChild(donations_row1_btn)

                                    donations_row1_btn.addEventListener('click', () => {
                                        console.log(`${donations_row1_btn.textContent} btn clicked`);
                                    });
                                });

                                const donations_row2 = document.createElement('div');
                                donations_row2.className = 'donations_row';
                                const donations_row2_btns = [
                                    { value: 'smlBag', label: 'Small Shopping Bag' },
                                    { value: 'lgBag', label: 'Large Shopping Bag' }
                                ];
                                donations_row2_btns.forEach(btn => {
                                    const donations_row2_btn = document.createElement('button');
                                    donations_row2_btn.className = 'donations_btn';
                                    donations_row2_btn.value = btn.value;
                                    donations_row2_btn.textContent = btn.label;
                                    donations_row2.appendChild(donations_row2_btn);
                                    donations_row2_btn.addEventListener('click', () => {
                                        console.log(`${donations_row2_btn.textContent} btn clicked`);
                                    });
                                });

                                donations_div.appendChild(donations_row1);
                                donations_div.appendChild(donations_row2);

                                items_div.appendChild(donations_div);
                                break;


                            case "test":
                                items_div.innerHTML = ''
                                console.log('Test Btn Clicked (no content to display)')
                                break;


                            default:
                                break

                        }
                    });
                    item_type_div.appendChild(misc_btn);
                });

                setFirstItemTypeToClick('loyalty');
                break;



            case "beans":

                const beans_data = await load_beans();

                bev_type.innerHTML = "";
                item_type_div.innerHTML = "";

                const beans_btns = [
                    { value: 'core', label: 'Core Coffee' },
                    { value: 'reserve', label: 'Reserve & Pre-Ground' }
                ];
                beans_btns.forEach(btn => {
                    const beans_btn = document.createElement('button');
                    beans_btn.className = 'item_type';
                    beans_btn.value = btn.value;
                    beans_btn.textContent = btn.label;
                    item_type_div.appendChild(beans_btn);

                    beans_btn.addEventListener('click', () => {
                        const name = beans_btn.value;
                        switch (name) {

                            case "core":
                                items_div.innerHTML = '';
                                const core_bean_data = beans_data.core;

                                const core_div = document.createElement('div');
                                core_div.className = 'bean_div';

                                core_bean_data.forEach(bean => {
                                    const core_btn = document.createElement('button');
                                    core_btn.className = 'bean_btn';
                                    core_btn.textContent = bean.item_name;
                                    core_btn.value = bean.price;
                                    core_btn.addEventListener('click', () => {
                                        console.log(`${core_btn.textContent} btn clicked`)
                                    });
                                    core_div.appendChild(core_btn);
                                });

                                items_div.appendChild(core_div);


                                break;


                            case "reserve":

                                items_div.innerHTML = '';
                                const reserve_bean_data = beans_data.reserve;

                                const reserve_div = document.createElement('div');
                                reserve_div.className = 'bean_div';

                                reserve_bean_data.forEach(bean => {
                                    const reserve_btn = document.createElement('button');
                                    reserve_btn.className = 'bean_btn';
                                    reserve_btn.textContent = bean.item_name;
                                    reserve_btn.value = bean.price;
                                    reserve_btn.addEventListener('click', () => {
                                        console.log(`${reserve_btn.textContent} btn clicked`);
                                    });
                                    reserve_div.appendChild(reserve_btn);
                                });

                                items_div.appendChild(reserve_div);


                                break;


                            default:
                                break

                        }
                    });
                });

                setFirstItemTypeToClick('core');
                break;



            case "drinks":

                item_type_div.innerHTML = "";
                bev_type.innerHTML = "";

                const drink_btns = [
                    { value: 'shots', label: 'Shots', id: 'shot_long_btn' },
                    { value: 'syrup', label: 'Syrup' },
                    { value: 'milk', label: 'Milk' },
                    { value: 'custom', label: 'Custom' },
                ]
                drink_btns.forEach(btn => {

                    const drink_btn = document.createElement('button');
                    drink_btn.className = 'item_type';

                    if (btn.id == 'shot_long_btn') {
                        drink_btn.id = btn.id;
                        drink_btn.value = btn.value;
                        const shot_div = document.createElement('div');
                        shot_div.id = 'shot_div';
                        const shot_div_labels = [
                            { value: 'Iced' },
                            { value: 'Decaf' },
                            { value: 'Shots' },
                            { value: 'Size' }
                        ]
                        shot_div_labels.forEach(label => {
                            if (label.value == 'Iced') {
                                const iced_div = document.createElement('div');
                                iced_div.id = 'iced_div';
                                const iced_span = document.createElement('span');
                                iced_span.className = 'square_label';
                                iced_span.textContent = label.value;
                                const iced_square = document.createElement('span');
                                iced_square.className = 'square';
                                iced_div.appendChild(iced_span);
                                iced_div.appendChild(iced_square);
                                shot_div.appendChild(iced_div);
                            } else {
                                const label_span = document.createElement('span');
                                label_span.className = 'square_label';
                                label_span.textContent = label.value;
                                const square_span = document.createElement('span');
                                square_span.className = 'square';
                                shot_div.appendChild(label_span);
                                shot_div.appendChild(square_span);
                            }
                            drink_btn.appendChild(shot_div);
                        });

                    }
                    else {
                        drink_btn.className = 'item_type';
                        drink_btn.value = btn.value;

                        const btn_div = document.createElement('div');
                        btn_div.className = 'drink_details';
                        const btn_label = document.createElement('span');
                        btn_label.className = 'square_label';
                        btn_label.textContent = btn.label;
                        const btn_square = document.createElement('span');
                        btn_square.className = 'square';
                        btn_div.appendChild(btn_label);
                        btn_div.appendChild(btn_square);

                        drink_btn.appendChild(btn_div)
                    }

                    drink_btn.addEventListener('click', async function () {

                        const name = drink_btn.value;
                        switch (name) {

                            case "shots":

                                items_div.innerHTML = ' ';
                                const shots_content_div = document.createElement('div');
                                shots_content_div.id = 'shots_content_div';

                                const buttons = [
                                    { label: 'Iced', value: 'iced' },
                                    { value: null },
                                    { label: 'Blonde', value: 'blonde' },
                                    { label: 'Decaf', value: 'decaf' },
                                    { label: '1/2<br>Decaf', value: 'half' },
                                    { value: null },
                                    { value: null },
                                    { value: null },
                                    { label: '2/3<br>Decaf', value: 'two-third' },
                                    { label: '1/3<br>Decaf', value: 'one-third' },
                                    { label: 'Single<br>(Solo)', value: 'single' },
                                    { label: 'Double<br>(Doppio)', value: 'double' },
                                    { label: 'Triple', value: 'triple' },
                                    { label: 'Quad', value: 'quad' },
                                    { label: 'More Shots', value: 'more' },
                                    { label: 'Affogato Shot', value: 'affogato' },
                                    { value: null },
                                    { value: null },
                                    { value: null },
                                    { label: 'Frappuccino Roast Coffee', value: 'frap_roast' },
                                    { label: 'Kids', value: 'kids' },
                                    { value: null },
                                    { label: 'Updosed', value: 'updosed' },
                                    { label: 'Long Shot', value: 'long' },
                                    { label: 'Ristretto', value: 'ristretto' },
                                    { label: 'Short', value: 'short' },
                                    { label: 'Tall', value: 'tall' },
                                    { label: 'Grande', value: 'grande' },
                                    { label: 'Venti', value: 'venti' },
                                    { label: 'Trenta', value: 'trenta' }
                                ];

                                buttons.forEach(btn => {
                                    const btn_div = document.createElement('div');
                                    btn_div.className = 'grid_cell';
                                    if (btn.value != null) {
                                        const button = document.createElement('button');
                                        button.className = 'base_btn';
                                        button.value = btn.value;
                                        button.innerHTML = btn.label;
                                        btn_div.appendChild(button);

                                        button.addEventListener('click', () => {
                                            console.log(`${button.label} Button Clicked`); //dont think I need swtich for this
                                        });
                                    }
                                    shots_content_div.appendChild(btn_div);

                                    items_div.appendChild(shots_content_div);

                                });

                                break;


                            case "syrup":
                                console.log('syrup btn clicked');
                                items_div.innerHTML = "";
                                const syrup_div = document.createElement('div');
                                syrup_div.id = 'syrup_div';
                                const syrup_amount_div = document.createElement('div');
                                syrup_amount_div.id = 'syrup_amount_div';
                                const syrup_amount_btns = [
                                    { value: 'no', label: 'No' },
                                    { value: 'sub', label: 'Sub' },
                                    { value: 'pumps', label: 'Pumps' },
                                    { value: 'extra', label: 'Extra' },
                                    { value: 'light', label: 'Light' }
                                ];
                                syrup_amount_btns.forEach(btn => {
                                    const syrup_btn = document.createElement('button');
                                    syrup_btn.className = 'syrup_mod_btn';
                                    syrup_btn.value = btn.value;
                                    syrup_btn.textContent = btn.label;
                                    syrup_amount_div.appendChild(syrup_btn);
                                    syrup_btn.addEventListener('click', () => {
                                        const name = syrup_btn.value;
                                        switch (name) {
                                            case "no":
                                                console.log('no btn clicked');
                                                break;

                                            case "sub":
                                                console.log('sub syrup btn clicked');
                                                break;


                                            case "extra":
                                                console.log('extra btn clicked');
                                                break;

                                            case "light":
                                                console.log('light btn clicked');
                                                break;

                                            default:
                                                break;
                                        }
                                    });
                                });

                                const syrup_container = document.createElement('div');
                                syrup_container.id = 'syrup_container';

                                const syrup_choices_div = document.createElement('div');
                                syrup_choices_div.id = 'syrup_choices_div';
                                const syrup_choices = [
                                    { value: 'caramel', label: 'Caramel Syrup' },
                                    { value: 'cinnamonDolce', label: 'Cinnamon Dolce Syrup' },
                                    { value: 'hazelnut', label: 'Hazelnut Syrup' },
                                    { value: 'vanilla', label: 'Vanilla Syrup' },
                                    { value: 'classic', label: 'Classic Syrup' },
                                    { value: 'peppermint', label: 'Peppermint Syrup' },
                                    { value: 'brownSugar', label: 'Brown Sugar Syrup' },
                                    { value: 'chai', label: 'Chai' },
                                    { value: 'honeyBlend', label: 'Honey Blend' },
                                    { value: 'sfVanilla', label: 'Sugar Free Vanilla Syrup' },

                                ];

                                syrup_choices.forEach(syrup => {

                                    const syrup_btn = document.createElement('button');
                                    syrup_btn.className = 'syrup_btn';
                                    syrup_btn.value = syrup.value;
                                    syrup_btn.textContent = syrup.label;
                                    syrup_choices_div.appendChild(syrup_btn);

                                    syrup_btn.addEventListener('click', () => {
                                        console.log(`${syrup_btn.label} btn clicked`)
                                    });

                                });

                                const sauce_choices_div = document.createElement('div');
                                sauce_choices_div.id = 'sauce_choices_div';
                                const sauce_choices = [
                                    { value: 'mocha', label: 'Mocha Sauce' },
                                    { value: 'whiteMocha', label: 'White Mocha Sauce' },
                                    { value: 'darkCaramel', label: 'Dark Caramel Sauce' },

                                ];

                                sauce_choices.forEach(sauce => {
                                    const sauce_btn = document.createElement('button');
                                    sauce_btn.className = 'suace_btn';
                                    sauce_btn.value = sauce.value;
                                    sauce_btn.textContent = sauce.label;
                                    sauce_choices_div.appendChild(sauce_btn);

                                    sauce_btn.addEventListener('click', () => {
                                        console.log(`${sauce.label} btn clicked`)
                                    });
                                });

                                const seasonal_options_div = document.createElement('div');
                                seasonal_options_div.id = 'seasonal_options_div';
                                const seasonal_options = [
                                    { value: 'horchata', label: 'Horchata Syrup' },
                                ];

                                seasonal_options.forEach(option => {
                                    const option_btn = document.createElement('button');
                                    option_btn.className = 'option_btn';
                                    option_btn.textContent = option.label;
                                    option_btn.value = option.value;
                                    seasonal_options_div.appendChild(option_btn);

                                    option_btn.addEventListener('click', () => {
                                        console.log(`${option.label} btn clicked`);
                                    });

                                });

                                syrup_container.appendChild(syrup_choices_div);
                                syrup_container.appendChild(sauce_choices_div);
                                syrup_container.appendChild(seasonal_options_div);

                                syrup_div.appendChild(syrup_amount_div);
                                syrup_div.appendChild(syrup_container);

                                items_div.appendChild(syrup_div);
                                break;


                            case "milk":
                                console.log('milk btn clicked');
                                items_div.innerHTML = '';
                                const milk_container = document.createElement('div');
                                milk_container.id = 'milk_container';

                                const milks = [
                                    { value: 'nonfat', label: 'Nonfat Milk' },
                                    { value: '2%', label: '2% Milk' },
                                    { value: 'whole', label: 'Whole Milk' },
                                    { value: 'soy', label: 'Soy Milk' },
                                    { value: 'oat', label: 'Oatmilk' },
                                    { value: 'coconut', label: 'Coconut Milk' },
                                    { value: 'almond', label: 'Almondmilk' },
                                    { value: 'half', label: 'Half & Half (Breve)' },
                                    { value: 'heavy', label: 'Heavy Cream' },
                                    { value: 'vsc', label: 'Vanilla Sweet Cream' },
                                    { value: 'ndvsc', label: 'ND Vanilla Sweet Cream' },

                                ]

                                const replace_milk = document.createElement('div');
                                replace_milk.id = 'replace_milk';

                                milks.forEach(milk => {
                                    const milk_btn = document.createElement('button');
                                    milk_btn.className = 'milk_btn';
                                    milk_btn.textContent = `${milk.label}`;
                                    milk_btn.value = milk.value;

                                    milk_btn.addEventListener('click', () => {
                                        console.log(`${milk.label} btn clicked`)
                                    });

                                    replace_milk.appendChild(milk_btn);
                                });


                                const splash_milk = document.createElement('div');
                                splash_milk.id = 'splash_milk';

                                const milk_mod_div = document.createElement('div');
                                milk_mod_div.id = 'milk_mod_div';

                                const milk_mods = [
                                    { label: 'Light' },
                                    { label: 'Extra' }
                                ];

                                milk_mods.forEach(mod => {
                                    const mod_btn = document.createElement('button');
                                    mod_btn.className = 'milk_mod_btn';
                                    mod_btn.textContent = mod.label;

                                    mod_btn.addEventListener('click', () => {
                                        const name = mod_btn.label;
                                        switch (name) {
                                            case 'Light':
                                                console.log(`${name} btn clicked`)
                                                break;

                                            case 'Extra':
                                                console.log(`${name} btn clicked`)
                                                break;

                                            default:
                                                break;
                                        }
                                    });

                                    milk_mod_div.appendChild(mod_btn);
                                });

                                const splash_milk_div = document.createElement('div');
                                splash_milk_div.id = 'splash_milk_div';

                                milks.forEach(milk => {
                                    const splash_milk_btn = document.createElement('button');
                                    splash_milk_btn.className = 'splash_milk_btn';
                                    splash_milk_btn.textContent = `Splash of ${milk.label}`;
                                    splash_milk_btn.value = milk.value;

                                    splash_milk_btn.addEventListener('click', () => {
                                        console.log(`Splash ${milk.label} btn clicked`)
                                    });

                                    splash_milk_div.appendChild(splash_milk_btn);
                                });

                                splash_milk.appendChild(milk_mod_div);
                                splash_milk.appendChild(splash_milk_div);

                                milk_container.appendChild(replace_milk);
                                milk_container.appendChild(splash_milk);

                                items_div.appendChild(milk_container);
                                break;


                            case "custom":
                                items_div.innerHTML = '';
                                console.log('custom btn clicked');

                                const custom_container = document.createElement('div');
                                custom_container.id = 'custom_container';

                                const custom_mods = document.createElement('div');
                                custom_mods.id = 'custom_mods';
                                const mods = [
                                    { label: 'No' },
                                    { label: 'Sub' },
                                    { label: 'Extra' },
                                    { label: 'Light' }
                                ];
                                mods.forEach(mod => {
                                    const custom_mod_btn = document.createElement('button');
                                    custom_mod_btn.textContent = mod.label;
                                    custom_mod_btn.className = 'custom_mod_btn';

                                    custom_mod_btn.addEventListener('click', () => {
                                        console.log(`${mod.label} btn clicked`);
                                    });

                                    custom_mods.appendChild(custom_mod_btn);
                                });

                                const custom_div = document.createElement('div');
                                custom_div.id = 'custom_div';
                                const customs = [
                                    { label: 'Ice' },
                                    { label: 'Water' },
                                    { label: 'Whipped Cream' },
                                    { label: null },
                                    { value: null },
                                    { value: null },
                                    { label: 'Agave' },
                                    { label: 'Splenda' },
                                    { label: 'Sugar' },
                                    { label: 'Stevia' },
                                    { label: 'Honey' },
                                    { label: 'Raw Sugar' },
                                    { label: 'Strawberry Puree' },
                                    { label: 'Frappuccino Chips' },
                                    { label: 'Vanilla Bean Power' },
                                    { label: 'Matcha' },
                                    { label: 'Add Blueberries' },
                                    { label: 'Cherry Powder' },
                                    { label: 'Lemonade' },
                                    { label: 'Mocha Drizzle' },
                                    { label: 'Line the Cup w/Mocha' },
                                    { label: 'Caramel Drizzle' },
                                    { label: 'Line the Cup w/Caramel' },
                                    { label: 'Lavender Powder' },
                                    { label: 'Foam' },
                                    { label: 'Cold Foams' },
                                    { label: 'Strawberry Inclusions' },
                                    { label: 'Mango Dragonfruit Inclusions' },
                                    { label: 'Raspberry Flavored Pearls' },
                                    { label: 'Blackberry Inclusions' },
                                ]
                                customs.forEach(custom => {
                                    const btn_div = document.createElement('div');
                                    btn_div.className = 'grid_cell';
                                    if (custom.label != null) {
                                        const custom_btn = document.createElement('button');
                                        custom_btn.className = 'custom_btn';
                                        custom_btn.innerHTML = custom.label;
                                        btn_div.appendChild(custom_btn);

                                        switch (custom.label) {
                                            case 'Cold Foams':
                                                custom_btn.addEventListener('click', () => {
                                                    console.log('Cold Foams btn clicked');
                                                    items_div.innerHTML = 'COLD FOAMS'
                                                });

                                            default:
                                                custom_btn.addEventListener('click', () => {
                                                    console.log(`${custom.label} Button Clicked`); //dont think I need swtich for this
                                                });
                                                break;
                                        }
                                    }
                                    custom_div.appendChild(btn_div);
                                });

                                const extra_custom = document.createElement('div');
                                extra_custom.id = 'extra_custom';

                                const extra_customs = [
                                    { label: 'with Room' },
                                    { label: 'Extra Hot' },
                                    { label: 'Personal Cup' },
                                    { label: 'For Here Cup' },
                                    { label: 'More Custom Toppings & Inclusions' },
                                    { label: 'More Custom Directions' },
                                ];
                                extra_customs.forEach(extra => {
                                    const extra_custom_btn = document.createElement('button');
                                    extra_custom_btn.textContent = extra.label;
                                    extra_custom_btn.className = 'extra_custom_btn';
                                    extra_custom.appendChild(extra_custom_btn);

                                    switch (extra.label) {
                                        case 'More Custom Toppings & Inclusions':
                                            extra_custom_btn.addEventListener('click', () => {
                                                items_div.innerHTML = 'More Custom Toppings and Inclusions';
                                                console.log(`${extra.label} btn clicked`);
                                            });
                                            break;

                                        case 'More Custom Directions':
                                            extra_custom_btn.addEventListener('click', () => {
                                                items_div.innerHTML = 'More Custom Directions';
                                                console.log(`${extra.label} btn clicked`);
                                            });
                                            break;

                                        default:
                                            extra_custom_btn.addEventListener('click', () => {
                                                console.log(`${extra.label} btn clicked`);
                                            });
                                            break;
                                    }
                                });


                                custom_container.appendChild(custom_mods);
                                custom_container.appendChild(custom_div);
                                custom_container.appendChild(extra_custom);

                                items_div.appendChild(custom_container)
                                break;


                            default:
                                break;

                        }
                    });

                    item_type_div.appendChild(drink_btn);
                });


                const bev_type_btns = [
                    { value: 'brewed', label: 'Brewed' },
                    { value: 'espresso', label: 'Espresso' },
                    { value: 'blended', label: 'Blended' },
                    { value: 'tea', label: 'Tea' },
                    { value: 'other', label: 'Other' }
                ]
                bev_type_btns.forEach(btn => {
                    const bev_type_btn = document.createElement('button');
                    bev_type_btn.className = 'bev_type_btn';
                    bev_type_btn.textContent = btn.label;
                    bev_type_btn.value = btn.value;
                    bev_type_btn.addEventListener('click', () => {
                        const name = bev_type_btn.value;

                        switch (name) {
                            case 'brewed':
                                break

                            case 'espresso':
                                break

                            case 'blended':
                                break

                            case 'tea':
                                break

                            case 'other':
                                break

                            default:
                                break
                        }
                    });

                    bev_type.appendChild(bev_type_btn)

                });
                setFirstItemTypeToClick("shots");
                break;

            default:
                break;
        }
    });
});

function setFirstItemTypeToClick(value) {
    setTimeout(() => {
        const btn = document.querySelector(`.item_type[value="${value}"]`);
        if (btn) btn.click();
    }, 50); // give more breathing room
}


const tender_btns = document.querySelectorAll('.tender_btn');
tender_btns.forEach(btn => {
    const name = btn.value;
    btn.addEventListener('click', () => {
        switch (name) {
            case "functions":
                // INSERT BUTTON LOGIC
                //DISPLAY FUNCTIONS PAGE (TAKE PICTURE)
                console.log("functions btn clicked");
                break;
            case "tender":
                // INSERT BUTTON LOGIC
                //OPEN PAYMENT SCREEN WITH PINPAD FOR CASH 
                console.log("tender btn clicked");
                break;
            case "order":
                // INSERT BUTTON LOGIC
                //DISPLAY MAIN.HTML WITH CURRENT ITEMS IN THE CART IF ANY
                console.log('order btn clicked');
                break;

            default:
                break;
        }
    });
});


const checkout_btns = document.querySelectorAll('.checkout_btn');
checkout_btns.forEach(btn => {
    const name = btn.value;
    btn.addEventListener('click', () => {
        switch (name) {
            case "quantity":
                // INSERT BUTTON LOGIC
                //DISPLAY POPUP WITH PINPAD FOR SETTING QUANTITY OF SYRPUP/POWDER/SUGAR
                console.log('Quantity btn clicked');
                break;
            case "customer":
                // INSERT BUTTON LOGIC
                //SET CUSTOMER NAME OF THE ORDER
                console.log('Customer name btn clicked');
                break;

            default:
                break
        }
    });
});


const func_btns = document.querySelectorAll('.func_btn');
func_btns.forEach(btn => {
    const name = btn.value;
    btn.addEventListener('click', () => {
        switch (name) {
            case "void":
                //REMOVE ITEM OR MODIFICATION THAT IS SELECTED
                // INSERT BUTTON LOGIC
                console.log('void btn clicked');
                break;
            case "here":
                //SET ORDER AS FOR HERE
                // INSERT BUTTON LOGIC
                console.log('here btn clicked');
                break;
            case "discount":
                //DISPLAY MENU FOR DISCOUNT OPTIONS
                // INSERT BUTTON LOGIC
                console.log('discount btn clicked');
                break;
            case 'logout':
                window.location.replace('/');
                break;
            case "cancel":
                //CANCEL ENTIRE ORDER
                // INSERT BUTTON LOGIC
                console.log('cancel btn clicked');
                break;
            case "togo":
                //SET ORDER AS TO GO
                // INSERT BUTTON LOGIC
                console.log('togo btn clicked');
                break;
            case "save":
                //SAVE ORDER AND CLEAR ORDER LIST OF ITEMS ALSO CHANGES TO FIND BTN AFTER SAVE IS DONE
                // INSERT BUTTON LOGIC
                console.log('save btn clicked');
                break;
            default:
                break
        }
    });
});


const addit_btns = document.querySelectorAll('.addit_btns');
addit_btns.forEach(btn => {
    const name = btn.value;
    btn.addEventListener('click', () => {
        switch (name) {
            case "avalability":
                //SET QUANITITY OF ITEMS TO 0 SO ITEM CANNOT BE ORDERED
                // INSERT BUTTON LOGIC
                console.log('avalability btn clicked');
                break;
            case "sku":
                //SEARCH ITEM BY SKU
                // INSERT BUTTON LOGIC
                console.log('sku btn clicked');
                break;
            case "price":
                //FIND PRICE OF ITEM ( IDK DONT HAVE A SCANNER)
                // INSERT BUTTON LOGIC
                console.log('price btn clicked');
                break;
            case "search":
                //SEARCH ITEM BY NAME
                // INSERT BUTTON LOGIC
                console.log('search btn clicked');
                break;
            case "askme":
                //ADD STRING MESSSAGE TO MOD LIST
                // INSERT BUTTON LOGIC
                console.log('ask me btn clicked');
                break;
            case "warmed":
                // SET WARMED TO TRUE ONLY FOR FOOD
                // INSERT BUTTON LOGIC
                console.log('warmed btn clicked');
                break;
            default:
                break
        }
    });
});


item_type_div.addEventListener('click', (e) => {
    const btn = e.target.closest('.item_type');
    if (!btn) return;
});

const final_price_btn = document.querySelector('#final_price');
final_price_btn.addEventListener('click', () => {
    console.log('final price btn clicked');
});


//  MAIN.HTML END 

