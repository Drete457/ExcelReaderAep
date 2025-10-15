import { useState, useEffect } from 'react';
import { CCol, CFormInput } from '@coreui/react';
import BotaoDeCopiar from '../Components/botao-de-copiar/botao-de-copiar';

const RegionalList = ({ names, bo, t1, t2, cfRData, setListaDosNomes }) => {
  const [checkbox, setCheckbox] = useState([]);

  const handleCheckbox = index => {
    const newData = [...checkbox];
    newData[index].checked = !newData[index].checked;

    setCheckbox(newData);
    setListaDosNomes(info => {
      const sectionNames = newData
        .map(entry => entry.name)
        .filter(Boolean);
      const uncheckedNames = newData
        .filter(entry => !entry.checked && entry.name)
        .map(entry => entry.name);
      const preserved = info.filter(item => !sectionNames.includes(item));

      return [...preserved, ...uncheckedNames];
    });
  };

  useEffect(() => {
    if (names) {
      const inicialCheckbox = [];

      names.forEach((name, index) => {
        inicialCheckbox[index] = { name, checked: false };
      });

      setCheckbox(inicialCheckbox);
    }
  }, [names]);

  return names.map((name, index) => {
    let dataText = '';
    if (cfRData[index]) {
      const date = new Date(cfRData[index]);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      dataText = day + '/' + month + '/' + year;
    }

    return (
      <section key={index}>
        {name && (
          <div className="row pt-1 justify-content-center g-3">
            <CCol md="5">
              <label className="form-label d-flex align-items-center fw-semibold">
                {index === 0 ? t1 : t2 + index}
                <input
                  type="checkbox"
                  className="form-check-input ms-2 list-checkbox"
                  checked={checkbox[index]?.checked}
                  onChange={() => handleCheckbox(index)}
                />
              </label>
              <div className="d-inline-block ms-2">
                <BotaoDeCopiar texto={name} />
              </div>
              <CFormInput
                id={`regional-nome-${index}`}
                value={name || ''}
                readOnly
                disabled
                className="c-form-input--contrast"
              />
            </CCol>
            <CCol md="2" className="mt-auto">
              <label className="form-label fw-semibold">BO</label>
              <CFormInput
                id={`regional-bo-${index}`}
                value={bo[index] || ''}
                readOnly
                disabled
                className="c-form-input--contrast"
              />
            </CCol>
            <CCol md="2">
              <label className="form-label fw-semibold">Validade</label>
              <CFormInput
                id={`regional-validade-${index}`}
                value={dataText}
                readOnly
                disabled
                className="c-form-input--contrast"
              />
            </CCol>
          </div>
        )}
      </section>
    );
  });
};

export default RegionalList;
