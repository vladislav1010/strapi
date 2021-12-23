import FormModal from '../index';

// 3 ✅ 2 ✅
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

// 3 add test, as I've missed case earlier ✅
test('abracadabra edit when another data schema is empty', () => {
  render(<FormModal modalType="abracadabra" actionType="edit" />, {wrapper: <DataManagerProvider abracadabra={{name: 'test1', value: 'test2'}} anotherDataSchema={{}} />})

  const newName = '__testName__'
  userEvent.type(getByLabelText(/qwerty/i), newName)

  userEvent.click(getByLabelText(/submit/i))

  expect(getByRole(
    'header'
  )).toHaveTextContent(`_${newName}`)
  expect(getByTestId('status', getByTestId('page'))).toHaveTextContent('draft')
})