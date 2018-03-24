import ComboTableContainer from '../../../src/userProfile/components/ComboTableContainer';
import ComboTable from '../../../src/userProfile/components/ComboTable';

describe('ComboTableContainer', () => {
  let wrapper
  let userCombos =[
    {
      id: 1,
      genre: "Mystery",
      topping: "Bacon"
    },
    {
      id: 2,
      genre: "Drama",
      topping: "Extra Cheese"
    }
  ]

  beforeEach(() => {
    wrapper = mount(
      <ComboTableContainer
        userCombos={userCombos}
      />
    );
  });

  it('should render a table if there are combos', () => {
    expect(wrapper.find('table').length).toEqual(1);
  });

  it('should render a table if there are combos with the correct headers', () => {
    let header = wrapper.find('th')
    expect(header.length).toEqual(3);
    expect(header.at(0).text()).toEqual('Genre')
    expect(header.at(1).text()).toEqual('Topping')
    expect(header.at(2).text()).toEqual('')
  })

  it('should render a ComboTable component for every combo', () => {
    expect(wrapper.find('ComboTable').length).toEqual(2);
  });
});
