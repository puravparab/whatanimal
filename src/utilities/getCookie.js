export const getCookie = (name) => {
	try{
		var cookies = document.cookie.split("; ")
		var cookieValue = cookies.find(row => row.startsWith(name + '=')).split("=")[1]
		return cookieValue;
	}
	catch(err){
		console.log(err)
	}
}