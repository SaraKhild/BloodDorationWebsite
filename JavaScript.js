
const Form = document.getElementsById('form');
const fullname = document.getElementById('fullname');
const phonenumber = document.getElementById('phonenumber');
const city = document.getElementById('city');
const bloodtype = document.getElementById('bloodtype');
const hospital = document.getElementById('hospital');


Form.addEventListener('submit',(e)=>{
	
	e.preventDefault();
	
	checkInput();
	
	
	
});


//method checkInput
function checkInput(){
	
//get the values from the inputs
    const FullNameValue = fullname.value.trim();
	const PhoneNumberValue = phonenumber.value.trim();
	const CityValue =city.value.trim();
	const BloodTypeValue = bloodtype.value.trim();
	const HospitalValue =hospital.value.trim();
		
	if( FullNameValue ===''){
		
		//show error
		//add error class
		setErrorFor(fullname,'Full Name can not be blank');
	}else {
		
		//add success class
		setSuccessFor(fullname);
	}
	
	
}//end method


//method setErrorFor
 function setErrorFor( input,message){
	
	const formcontrol=input.parentElement; //.form-control
	const small= formcontrol.querySelector('small');
	
	//add error message inside small
	small.innerText=message;
	
	//add error class
	formcontrol.className='form-container error';
	
}//end method

//method setSuccessFor
function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-container success';
}
	
