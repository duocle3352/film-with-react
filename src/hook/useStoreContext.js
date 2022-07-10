import { useContext } from 'react';
import { ContextStore } from '~/stores';

function useStoreContext() {
    const [state, dispatch] = useContext(ContextStore);

    return [state, dispatch];
}

export default useStoreContext;
