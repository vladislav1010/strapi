import FormModal from '../index';

// 3 ✅
test('abracadabra edit', () => {
  // 2 ...

  render(<FormModal modalType="abracadabra" actionType="edit" />, {wrapper: <DataManagerProvider abracadabra={{name: 'test1', value: 'test2'}} />})

  const newName = '__testName__'
  userEvent.type(getByLabelText(/qwerty/i), newName)

  userEvent.click(getByLabelText(/submit/i))

  expect(getByRole(
    'header'
  )).toHaveTextContent(newName)
})