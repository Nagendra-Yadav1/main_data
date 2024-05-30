import React, { useState, useEffect } from 'react';

const SaleOrderForm = ({ order, onSave, readOnly }) => {
  const [formData, setFormData] = useState({ name: '', details: '' });

  useEffect(() => {
    if (order) {
      setFormData({ name: order.name, details: order.details });
    }
  }, [order]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!readOnly) {
      onSave({ ...formData, id: order ? order.id : null });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Order Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          readOnly={readOnly}
          required
        />
      </div>
      <div>
        <label>Order Details:</label>
        <input
          type="text"
          name="details"
          value={formData.details}
          onChange={handleChange}
          readOnly={readOnly}
          required
        />
      </div>
      {!readOnly && <button type="submit">Save</button>}
    </form>
  );
};

export default SaleOrderForm;
