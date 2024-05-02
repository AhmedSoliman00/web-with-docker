import Card from "../components/Card";
import { useEffect,useState } from "react";
function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/students') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error:', error));
  }, []);
  console.log(students)
  return (
    <section className=" bg-gray-900 max-w-full h-screen mx-auto px-4 sm:px-6 lg:px-20 py-12">
      <div className="w-full text-center pb-8">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white pb-2">
          Our Team
        </h1>
        
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {students.map((student) => (
          <Card key={student.id} student={student} />
        ))}
      </div>
    </section>

    
  );
}

export default Students;
