import ComboTable from '../../../src/userProfile/components/ComboTable';

describe('ComboTable', () => {
  let wrapper, handleDelete
  let combo = {
        id: 1,
        genre: "Mystery",
        topping: "Bacon"
      }

  beforeEach(() => {
    handleDelete = jasmine.createSpy('handleDelete spy')
    wrapper = mount(
      <ComboTable
        combo={combo}
        handleDelete={handleDelete}
      />
    );
  });

  it('should render a table row', () => {
    expect(wrapper.find('tr').length).toEqual(1);
  });

  it('should render 3 columns', () => {
    expect(wrapper.find('td').length).toEqual(3);
  });

  it('should have the correct props', () => {
    expect(wrapper.props().combo.genre).toEqual('Mystery')
    expect(wrapper.props().combo.topping).toEqual('Bacon')
  });

  it('should render a column with the genre from props', () => {
    expect(wrapper.find('td').at(0).text()).toEqual('Mystery');
  });

  it('should render a column with the topping from props', () => {
    expect(wrapper.find('td').at(1).text()).toEqual('Bacon');
  });

  it('should render a delete button', () => {
    expect(wrapper.find('button'));
  });

  it('should invoke the handleDelete function from props when the button is clicked', () => {
    wrapper.find('button').simulate('click')
    expect(handleDelete).toHaveBeenCalled()
  })
});
