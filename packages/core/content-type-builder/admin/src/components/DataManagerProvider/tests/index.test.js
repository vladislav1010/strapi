import useDataManager from "../../../hooks/useDataManager"

function TestComponent() {
  const {setModifiedData} = useDataManager()

const modifyData =() => {}

  return (
    <>
    <input onChange={() => {modifyData()}} />
    <button onClick={() => {
      setModifiedData()
    }}></button>
    </>
  )
}

test('when set modified data, sets into content types schema when is content type view', () => {
  // ...

  render(<TestComponent />, {wrapper: <DataManagerProvider />})

  // ...
})