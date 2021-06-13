import { useSelector, useDispatch } from 'react-redux';
import { changeSearchForm, fetchShoesAccordingToSearch } from '../../actions/action-creators';

export default function SearchForm() {
    const { text } = useSelector(state => state.searchForm);
    const dispatch = useDispatch();

    const handleSearch = e => {
        e.preventDefault();
        dispatch(changeSearchForm(e.target.value));
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchShoesAccordingToSearch(text));
    }
    return (
        <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
            <input className="form-control" placeholder="Поиск" value={text} onInput={handleSearch} />
        </form>
    )
}