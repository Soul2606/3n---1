

const main_flexbox_element = document.getElementById("main-flexbox")

const vertical_box_1 = document.getElementById("vertical-box1")




function generate_3n_sequence(start_value){
    let sequence = []
    let n = start_value
    for(let i=0; i<1000; i++){
        sequence.push(n)
        if(n === 1){
            break
        }
        if(n % 2 === 0){
            n /= 2
        }else{
            n = n * 3 + 1
        }	
    }
    return sequence
}




function create_new_table_row(iteration, value){
    const tr = document.createElement("tr")
    const td_iteration = document.createElement("td")
    const td_value = document.createElement("td")

    td_iteration.textContent = iteration
    td_value.textContent = value
    tr.appendChild(td_iteration)
    tr.appendChild(td_value)
    return tr
}




function create_new_table(){
    const table = document.createElement("table")
    const td_iteration = document.createElement("td")
    const td_value = document.createElement("td")

    td_iteration.textContent = "iteration"
    td_value.textContent = "value"
    table.appendChild(td_iteration)
    table.appendChild(td_value)
    return table
}




function create_3n_sequence_table(starting_3n_value){

    const new_table_element = create_new_table()
    new_table_element.className = "table"
    const sequence = generate_3n_sequence(starting_3n_value)
    for (let j = 0; j < sequence.length; j++) {
        const element = sequence[j];
        new_table_element.appendChild(create_new_table_row(j, element))
    }
    return new_table_element    
    
}




function reverse_3n_sequence_step(value_to_step_from){
    const reverse_even_step = value_to_step_from * 2
    const reverse_odd_step = (value_to_step_from - 1) / 3
    if(Number.isInteger(reverse_odd_step) && reverse_odd_step % 2 === 1 && value_to_step_from % 2 === 0){
        return {reverse_even_step:reverse_even_step, reverse_odd_step:reverse_odd_step}
    }
    return {reverse_even_step:reverse_even_step}
}




function create_number_list(number_list){
    const box_div = document.createElement("div")
    box_div.className = "number-list"
    for (let i = 0; i < number_list.length; i++) {
        const number = number_list[i];
        
        const div_elements = document.createElement("div")
        div_elements.className = "number-list-element"
        const paragraph_elements = document.createElement("p")
        paragraph_elements.textContent = String(number)
        div_elements.appendChild(paragraph_elements)
        box_div.appendChild(div_elements)
    }
    return box_div
}




function create_number_div(number){
    const main_body = document.createElement("div")
    main_body.className = "flexbox"

    const number_paragraph = document.createElement("p")
    number_paragraph.textContent = number
    number_paragraph.className = "wide-number"
    main_body.appendChild(number_paragraph)

    const subset_div = document.createElement("div")
    main_body.appendChild(subset_div)

    return {main:main_body, subset:subset_div}
}





const number_div = create_number_div(1)
vertical_box_1.appendChild(number_div.main)

let values_to_check = [[1, number_div.subset]]

for(let i=0; i<20; i++){
    
    let values_to_check_next = []

    console.log(Array.from(values_to_check))
    for (let j = 0; j < values_to_check.length; j++) {
        const number = values_to_check[j][0]
        const element = values_to_check[j][1]
        
        const reverse_step_values = reverse_3n_sequence_step(number)
        const reverse_even_step = reverse_step_values.reverse_even_step
        const reverse_odd_step = reverse_step_values.reverse_odd_step
        
        const even_number_element = create_number_div(reverse_even_step)
        
        element.appendChild(even_number_element.main)
        
        values_to_check_next.push([reverse_even_step, even_number_element.subset])
        
        if(reverse_odd_step !== undefined && reverse_odd_step !== 1){
            const odd_number_element = create_number_div(reverse_odd_step)
            element.appendChild(odd_number_element.main)

            values_to_check_next.push([reverse_odd_step, odd_number_element.subset])
        }

    }
    values_to_check = Array.from(values_to_check_next)
}