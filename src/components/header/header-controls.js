import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeSearchForm } from '../../actions/shoes-action-creators';
import { pageUrls } from '../../navigation';
import CartIcon from './cart-icon';

export default function HeaderControls() {
    const history = useHistory();
    let [isSearchActive, setIsSearchActive] = useState(false);    
    let [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const executeShoesSearch = () => {
        if (search) {
            history.push(pageUrls.catalog);
            dispatch(changeSearchForm(search));
            setIsSearchActive(false);
            setSearch('');
        }
    }
    const toggleSearch = e => {
        e.preventDefault();
        if (!isSearchActive || !search) {
            setIsSearchActive(!isSearchActive);
        } else {
            executeShoesSearch();
        }
    }
    const onSearchSubmit = e => {
        e.preventDefault();
        if (search) executeShoesSearch();
    }
    const handleSearchChanged = ({ target }) => {
        setSearch(target.value);
    }
    
    const formVisibilityClass = !isSearchActive
        ? 'invisible'
        : '';
    return (
        <div>
            <form data-id="search-form" className={`header-controls-search-form form-inline ${formVisibilityClass}`}
                onSubmit={onSearchSubmit}>
                <input className="form-control" placeholder="Поиск" value={search} onInput={handleSearchChanged} />
            </form>
            <div className="header-controls-pics">
                <div data-id="search-expander" className="header-controls-pic header-controls-search" onClick={toggleSearch}></div>
                <CartIcon />
            </div>
        </div>
    );
}