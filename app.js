const values = {
  m_input: 0,
  km_input: 0,
  cm_input: 0,
  mi_input: 0,
  yd_input: 0,
  ft_input: 0,
  inc_input: 0,
};

const conversion_rates = {
  m_input: {
    km_input: 1 / 1000,
    cm_input: 100,
    mi_input: 0.621371 / 1000,
    yd_input: 1.09361,
    ft_input: 3.28084,
    inc_input: 39.3701,
  },
  km_input: {
    m_input: 1000,
    cm_input: 1000 * 100,
    mi_input: 0.621371,
    yd_input: 1093.61,
    ft_input: 3280,
    inc_input: 39370.01,
  },
  cm_input: {
    m_input: 1 / 100,
    km_input: 1 / (100 * 1000),
    mi_input: 0.621371 / (1000 * 100),
    yd_input: 0.0109361,
    ft_input: 0.0328084,
    inc_input: 0.393701,
  },
  mi_input: {
    km_input: 1.60934,
    m_input: 1.60934 * 100,
    cm_input: 1.60934 * 1000 * 100,
    yd_input: 1760,
    ft_input: 5280,
    inc_input: 63360,
  },
  yd_input: {
    km_input: 1.60934,
    m_input: 1.60934 * 100,
    cm_input: 1.60934 * 1000 * 100,
    mi_input: 1760,
    ft_input: 5280,
    inc_input: 63360,
  },
  ft_input: {
    km_input: 1.60934,
    m_input: 1.60934 * 100,
    cm_input: 1.60934 * 1000 * 100,
    yd_input: 1760,
    mi_input: 5280,
    inc_input: 63360,
  },
  inc_input: {
    km_input: 1.60934,
    m_input: 1.60934 * 100,
    cm_input: 1.60934 * 1000 * 100,
    yd_input: 1760,
    ft_input: 5280,
    mi_input: 63360,
  },
};

const convert = (fromKey, toKey, value) => {
  return conversion_rates[fromKey][toKey] * value;
};

const updateInputs = () => {
  for (let key in values) {
    document.querySelector(`input[name=${key}]`).value = values[key];
  }
};

const onKeyUp = (e) => {
  let changed_key = e.target.name;
  let changed_value = parseFloat(e.target.value || 0);

  values[changed_key] = changed_value;

  for (let key in values) {
    if (key === changed_key) {
      continue;
    }

    values[key] = convert(changed_key, key, changed_value);
  }

  updateInputs();
};

let inputs = document.querySelectorAll("input");
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("keyup", onKeyUp);
}
