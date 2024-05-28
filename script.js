

const main_flexbox_element = document.getElementById("main-flexbox")




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




let values_to_check = [1]
for(let i=0; i<100; i++){
    const reverse_step_values = reverse_3n_sequence_step(values_to_check[0])
    console.log(reverse_step_values)
    values_to_check.unshift()
    values_to_check.push(reverse_step_values.reverse_even_step)
    (reverse_step_values.reverse_odd_step !== undefined)? values_to_check.push(reverse_step_values.reverse_odd_step) : i += 0;//Yes this is necessary
}