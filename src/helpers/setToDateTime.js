export default function setToDateTime(dateString) {
    if(dateString === 'NULL') {
        return new Date()
    }

    // this works with the example date format YYYY-MM-DD
    // const dateAsArray = dateString.split('-');
    // return new Date(`${dateAsArray[1]}/${dateAsArray[2]}/${dateAsArray[0]}`)
    
    return new Date(dateString) // this should work with all date formats
}