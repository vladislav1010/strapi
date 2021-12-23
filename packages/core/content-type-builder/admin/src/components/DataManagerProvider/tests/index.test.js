import useDataManager from "../../../hooks/useDataManager"

// 2 change tests when I have to accommodate a change in an interface
function TestComponent() {
  const {setModifiedData, additionalSchemas} = useDataManager()

const modifyData = () => {}

  return (
    <>
    <input onChange={() => {modifyData()}} />
    <button onClick={() => {
      setModifiedData([{schemas: additionalSchemas.concat(bar)}])
    }}></button>
    </>
  )
}

// 3 ✅
test('when set modified data, sets into content types schema when is content type view', () => {
  // ...

  render(<TestComponent />, {wrapper: <DataManagerProvider />})

  // ...
})