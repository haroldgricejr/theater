const General_Admission_Ticket_Cost = 12;
const Child_And_Senior_Ticket_Costs = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = getBaseTicketCost(age);
    const isMatinee = prompt('Are you attending a matinee show?');

    if ((isMatinee === 'yes') || (isMatinee === 'y')) {
        cost = cost - MATINEE_DISCOUNT;
    }


    alert('Your ticket will cost: $' + cost);
}

function getBaseTicketCost(age) {
    if ((age <= 12) || (age >= 65)) {
        return Child_And_Senior_Ticket_Costs;
        return General_Admission_Ticket_Cost;
    }
}