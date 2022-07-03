import { render } from '@testing-library/react';
import { MockedProvider } from "@apollo/client/testing";
import Table from './Table';
import { constants } from './constants';
const query = constants.QUERY(null, "after");

it('renders the repo name', async () => {
  const queryMock = [{
    request: {
      query,
    },
    result: constants.MOCK_DATA
  }];
  const { getByText } = render(
    <MockedProvider mocks={queryMock}>
      <Table pageInfo={[constants.INITIAL_STATE]} handlePageChange={null} />
    </MockedProvider>
  );
  await new Promise((resolve) => setTimeout(resolve, 1000));
  expect(getByText(/create-react-app/)).toBeDefined();
})