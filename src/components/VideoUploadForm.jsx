import { useState } from 'react';
import { uploadFile } from '../services/api.service';

export default ({ appendFile }) => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    const result = await uploadFile(formData);

    appendFile(result);
    setTitle('');
    setFile(null);
  };

  return (
    <section>
      <h2>Upload a video</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="file">File</label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />

        <button type="submit">Upload</button>
      </form>
    </section>
  );
};
