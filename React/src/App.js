import 'devextreme/dist/css/dx.light.css';
import { useState } from 'react';
import Form from 'devextreme-react/form';
import Button from 'devextreme-react/button';
import Splitter, { Item } from 'devextreme-react/splitter';

const App = () => {
  const initialEmployee = {
    ID: 1,
    FirstName: 'John',
    LastName: 'Heart',
    Position: 'CEO',
    BirthDate: '1964/03/16',
    HireDate: '1995/01/15',
    Notes: 'John has been in the Audio/Video industry since 1990. He has led DevAv as its CEO since 2003.\r\n\r\nWhen not working hard as the CEO, John loves to golf and bowl. He once bowled a perfect game of 300.',
    Address: '351 S Hill St., Los Angeles, CA',
    Phone: '360-684-1334',
    Email: 'jheart@dx-email.com',
  };

  const [employee, setEmployee] = useState({ ...initialEmployee });
  const [output, setOutput] = useState(['Output:']);
  const [suppressFieldChangeEvent, setSuppressFieldChangeEvent] = useState(false);

  const onFieldDataChanged = (e) => {
    if (!suppressFieldChangeEvent) {
      setOutput((prevOutput) => [...prevOutput, e.value]);
    }
  };

  const resetFormAndOutput = () => {
    setSuppressFieldChangeEvent(true);
    setEmployee({ ...initialEmployee });
    setOutput(['Output:']);
    setTimeout(() => {
      setSuppressFieldChangeEvent(false);
    }, 0);
  };

  return (
    <Splitter
      id="splitter"
      width={500}
      height={400}
      separatorSize={5}
    >
      <Item size="285px">
        <Form
          formData={employee}
          onFieldDataChanged={onFieldDataChanged}
        />
      </Item>
      <Item>
        <Splitter orientation="vertical" separatorSize={5}>
          <Item size="80%">
            <div>
              {output.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </Item>
          <Item collapsible={true} minSize="40px">
            <Button
              text="Clear all entries"
              onClick={resetFormAndOutput}
            />
          </Item>
          <Item collapsed={true} collapsible={true} text="All rights are reserved © 2024" maxSize="30px" />
        </Splitter>
      </Item>
    </Splitter>
  );
};

export default App;
