import { useState } from 'react';
import { deleteFileById, getFileById } from '../services/api.service';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';

export const playerLoader = async ({ params }) => {
  const { id } = params;

  return {
    id,
    file: await getFileById(id)
  };
};

export default () => {
  const { id, file } = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async (e) => {
    e.preventDefault();

    await deleteFileById(id);

    navigate('/');
  };

  return (
    <main>
      <section>
        <h1>{file.title}</h1>
        <ReactPlayer url={file.url} controls />
        <p>{file.created_at}</p>
        <button onClick={handleDelete}>Delete</button>
      </section>
    </main>
  );
};
