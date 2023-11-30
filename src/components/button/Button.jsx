
export const Button = ({children, onClick: handleButton}) => {
  return (
    <>
    <button onClick={handleButton}> {children}</button>
    </>
  )
}
