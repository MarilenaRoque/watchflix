import filter from '../../redux/reducers/filter';

const exampleChangeFilterAction = {
  type: 'FILTER_CHANGE',
  payload: 'Drama',
};

const filterInitialState = 'All';

describe('Filter Reducer', () => {
  it('it should change the state using the payload object', () => {
    const result = filter(filterInitialState, exampleChangeFilterAction);
    expect(result).toEqual('Drama');
  });
});
