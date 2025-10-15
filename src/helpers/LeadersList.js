import { useState, useEffect } from 'react';
import { CCol, CFormInput } from '@coreui/react';
import BotaoDeCopiar from '../Components/botao-de-copiar/botao-de-copiar';

const LeadersList = ({ names, bo, t1, t2, cgData, setListaDosNomes }) => {
  let dataText = '';
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

  if (cgData) {
    const date = new Date(cgData[1]);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    dataText = day + '/' + month + '/' + year;
  }

  return names.map((name, index) => (
    <section key={index}>
      {name && (
        <div className="row pt-1 justify-content-center g-3">
          {index === 0 && cgData && (
            <CCol md="2">
              <label
                className="form-label fw-semibold"
                htmlFor={`leaders-mandato-${index}`}
              >
                Mandato
              </label>
              <CFormInput
                id={`leaders-mandato-${index}`}
                value={cgData[0] || ''}
                readOnly
                disabled
                className="c-form-input--contrast"
              />
            </CCol>
          )}
          <CCol md="5">
            <section className='d-flex'>
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
            </section>
            <CFormInput
              id={`leaders-nome-${index}`}
              value={name || ''}
              readOnly
              disabled
              className="c-form-input--contrast"
            />
          </CCol>
          <CCol md="2" className="mt-auto">
            <label className="form-label fw-semibold" htmlFor={`leaders-bo-${index}`}>
              BO
            </label>
            <CFormInput
              id={`leaders-bo-${index}`}
              value={bo[index] || ''}
              readOnly
              disabled
              className="c-form-input--contrast"
            />
          </CCol>
          {index === 0 && cgData && (
            <CCol md="2">
              <label
                className="form-label fw-semibold"
                htmlFor={`leaders-validade-${index}`}
              >
                Validade
              </label>
              <CFormInput
                id={`leaders-validade-${index}`}
                value={dataText}
                readOnly
                disabled
                className="c-form-input--contrast"
              />
            </CCol>
          )}
        </div>
      )}
    </section >
  ));
};

export default LeadersList;
