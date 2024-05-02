/* eslint-disable react/prop-types */
function Card({student}) {
 const { id, name, age, gpa } = student;
 return (
   <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
     <img
       className="h-40 w-40 object-cover object-center rounded-full mb-4"
       src={`${id}.jpg`} // Replace with your actual image URL pattern
       alt={`${name}'s photo`}
     />
     <div className="text-center">
       <p className="text-2xl text-white font-normal mb-1">
         {name}
       </p>
       <p className="text-xl  text-green-500 font-normal">AGE : {age}</p>
     </div>
     <div>
       <p className="text-xl text-orange-500 leading-loose font-normal text-base">
         GPA : {gpa}
       </p>
     </div>
   </div>
 );
}

export default Card;