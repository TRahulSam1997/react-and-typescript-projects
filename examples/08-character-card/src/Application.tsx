import * as React from 'react';

import { CharacterType, fetchCharacter } from './characters';

import { Loading } from './Loading';
import { CharacterInformation } from './CharacterInformation';

const Application = () => {
  const [character, setCharacter] = React.useState<CharacterType | null>(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      fetchCharacter().then(c => { setCharacter(c); setLoading(false) });
    }, 1000);
  }, []);

  return <main>
    { loading && <Loading /> }
    { character && <CharacterInformation character={character} /> }
  </main>;
};

export default Application;
