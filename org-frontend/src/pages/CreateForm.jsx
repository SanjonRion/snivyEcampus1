import React, {useState} from 'react'
import ApplicationCreateForm from '../components/ApplicationCreateForm';
import ApplicationDetailsForm from '../components/ApplicationDetailsForm';
import ApplicationSelectInstitutions from '../components/ApplicationSelectInstitutions';

function CreateForm() {
  
  let [form, setForm] = useState(1);
  let [fields, setFields] = useState(['Name', 'Email', 'Phone Number', 'CGPA']);
  const [groupSelected, setGroupSelected] = useState([]);
  const [allInstitutions, setInstitutions] = useState(["Jyothi Engineering College", "MEA Engineering College",  "Nehru Engineering College", "Al Ameen Engineering College", "Model Engineering College", "Government Engineering College"]);

  let clickNext = () => {
    setForm(prev => prev+1);
  }

  let clickPrev = () => {
    setForm(prev => prev-1);
  }

  let clickSubmit = () => {
    console.log("Success");
  }

  return (
    <div>
      {
        form == 1 ? <ApplicationDetailsForm next={clickNext} /> : 
        form == 2 ? <ApplicationCreateForm next={clickNext} prev={clickPrev} fields={fields} setFields={setFields} /> :
        form == 3 ? <ApplicationSelectInstitutions submit={clickSubmit} prev={clickPrev} groupSelected={groupSelected} setGroupSelected={setGroupSelected} institutions={allInstitutions}/> :
        <></>
      }
    </div>
  )
}

export default CreateForm