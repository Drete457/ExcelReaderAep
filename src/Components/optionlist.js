const optionList = (list => {
    const array = list.map((group) => { return ({ value: group[0], label: `Grupo: ${group[0]} Região: ${group[1]}` }) })
    
    return array;
})

export default optionList;