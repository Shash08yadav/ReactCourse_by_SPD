const munnaBhaiya = [] // => any data
const array = [
    ["head1", "desc1"],
    ["head2", "desc2"],
    ["head3", "desc3"],
    ["head4", "desc4"],
]
const objColl = [
    {
        title: "head1",
        desc: "desc1"
    },
    {
        title: "head2",
        desc: "desc2"
    },
    {
        title: "head3",
        desc: "desc3"
    }
]

console.table([array[0][0],array[0][1]])
console.table([objColl[1].title, objColl[1].desc])

