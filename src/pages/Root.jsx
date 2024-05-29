import { useState, useEffect } from 'react';
import { getAllFiles } from '../services/api.service';
import VideoListItem from '../components/VideoListItem';
import VideoUploadForm from '../components/VideoUploadForm';

export default () => {
  const [files, setFiles] = useState(undefined);

  useEffect(() => {
    const fetchFiles = async () => {
      const result = await getAllFiles({
        'sort[created_at]': 'DESC',
        limit: 10
      });

      setFiles(result);
    };

    fetchFiles();
  }, []);

  const appendFile = (file) => {
    setFiles((prevFiles) => [file, ...prevFiles]);
  };

  return (
    <main>
      <VideoUploadForm appendFile={appendFile} />
      <section>
        <h2>Videos</h2>
        {files ? (
          <ul>
            {files.map((file) => (
              <VideoListItem file={file} key={file.id} />
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </main>
  );
};
