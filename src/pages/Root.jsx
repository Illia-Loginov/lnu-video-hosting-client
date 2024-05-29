import { useState, useEffect } from 'react';
import { getAllFiles } from '../services/api.service';
import VideoListItem from '../components/VideoListItem';

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

  return (
    <main>
      <section>
        <h2>Upload a video</h2>
      </section>
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
