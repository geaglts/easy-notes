import { useContext } from 'react';
import '../styles/Containers/NoteList.scss';

import { Context } from '../Context';
import Note from '../components/Note';
import { Message } from '../components/Message';

interface NoteListProps {
  limit?: number;
}

function NoteList({ limit }: NoteListProps) {
  const { notes } = useContext(Context);

  return (
    <div className="NoteList">
      <h1 className="NoteList__Title">NoteList</h1>
      {notes.length === 0 && (
        <Message textMessage="🦔 Aun no has creado ninguna nota" />
      )}
      {notes.splice(0, limit || notes.length).map((note) => {
        return <Note key={note._id} {...note} />;
      })}
    </div>
  );
}

export default NoteList;
