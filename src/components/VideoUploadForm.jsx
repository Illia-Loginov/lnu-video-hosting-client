import { useState } from 'react';
import { uploadFile } from '../services/api.service';

export default ({ appendFile }) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
      const result = await uploadFile(formData);

      appendFile(result);
      setTitle('');
      setFile(null);
      setError(null);
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  return (
    <section className="section">
      <h2 className="heading">Upload a video</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          className="input"
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
        />

        <input
          className="input-file"
          type="file"
          id="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />

        <button className="input button" type="submit">
          Upload
        </button>
      </form>
      {error && <p className="form__error">{error}</p>}
    </section>
  );
};
