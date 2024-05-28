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

for(let i=1; i<10; i++){
    let n = i
    const new_table_element = create_new_table()
    new_table_element.className = "table"
    main_flexbox_element.appendChild(new_table_element)
    const sequence = generate_3n_sequence(i)
    for (let j = 0; j < sequence.length; j++) {
        const element = sequence[j];
        new_table_element.appendChild(create_new_table_row(j, element))
    }
}