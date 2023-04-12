//CONVERT IMAGE FROM INPUT[FILE] TO BASE64 STRING
export const convertToBase64 = (e: any, setValue: any) => {
  //e => event from input, setValue => state value to assign base64 URL to
  let file = e.target.files[0];

  // Make new FileReader
  let reader = new FileReader();

  // Convert the file to base64 text
  reader.readAsDataURL(file);

  // on reader load somthing...
  reader.onload = () => {
    // Make a fileInfo Object
    let fileInfo = {
      name: file.name,
      type: file.type,
      size: Math.round(file.size / 1000) + " kB",
      base64: reader.result,
      file: file,
    };
    setValue(fileInfo.base64);
  };
};

//TRUNCATE TEST BASED ON LENGTH GIVEN
export const truncate = (str: string, length: number) => {
  // string => text to truncater, length => maximum length of string to truncate to
  return str?.length > length ? str.substring(0, length - 3) + "..." : str;
};

//FORMAT KOBO FOR DISPLAY
export const formatKoboAmountForDisplay = (amount: number): string => {
  //kobo amount to format
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount / 100);
};

//REVERSE OBJECT 
export function reverseObject(obj: object){
  //Changes object keys to object values and vice versa
  return Object.fromEntries(
      Object.entries(obj).map((item) => item.reverse())
    ); 
}


//PASSWORD STRENGTH CHECKER

export const validatePasswordStrength = (password: string | any) => {
  let strength: number = 0;
  const feedback = [];
  let strong: boolean = false;

  if (password.length >= 10) {
    strength++;
  } else {
    feedback.push("Must be 10 characters of greater");
  }

  if (/[a-z]/.test(password)) {
    strength++;
  } else {
    feedback.push("Must have at least 1 lowercase letter");
  }

  if (/[A-Z]/.test(password)) {
    strength++;
  } else {
    feedback.push("Must have at least 1 uppercase letter");
  }

  if (/[0-9]/.test(password)) {
    strength++;
  } else {
    feedback.push("Must have at least 1 number");
  }

  if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
    strength++;
  } else {
    feedback.push("Must have at least 1 special character");
  }

  if (strength >= 5) {
    strong = true;
  }
  return { feedback, strong };
};


//INCHES TO FEETS
export const InchToFeet = (inch: string | number) => {
  let feet: number;
  if (typeof inch == "string") {
    feet = Number(inch) * 0.083;
  } else {
    feet = inch * 0.083;
  }
  return feet;
};

