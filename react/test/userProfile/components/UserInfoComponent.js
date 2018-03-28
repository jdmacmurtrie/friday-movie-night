import UserInfoComponent from '../../../src/userProfile/components/UserInfoComponent';

describe('UserInfoComponent', () => {
  let wrapper
  let user = {
      first_name: "Bob",
      last_name: "Msith",
      email: "darthbob@dstar.emp"
  }

  beforeEach(() => {
    wrapper = mount(
      <UserInfoComponent
        user={user}
      />
    );
  });

  it('should receive user info as props', () => {
    expect(wrapper.props()).toEqual(
      {
        user: {
          first_name: "Bob",
          last_name: "Msith",
          email: "darthbob@dstar.emp"
        }
      }
    );
  });

  it('should render an h1 tag with the first and last name of the user', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual('Bob Msith');
  });

  it('should render an p tag with the email of the user', () => {
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('darthbob@dstar.emp');
  });

  it('should render 2 buttons', () => {
    expect(wrapper.find('button').length).toEqual(2);
  });

  it('should render two links inside the buttons for editing and going back', () => {
    expect(wrapper.find('a').length).toEqual(2);
    expect(wrapper.find('a').at(0).text()).toEqual('Edit My Stuff');
    expect(wrapper.find('a').at(1).text()).toEqual('Back to start');
  });
});
