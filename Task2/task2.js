const students = [
    {name: "Steve"}, 
    {name: "Mike"}, 
    {name: "John"}
];

const getStudentNames = students.map((students_names)=>{
    return students_names.name;
})

console.log(getStudentNames);
