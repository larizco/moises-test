export default function Wrapper(props: any) {
  return (
    <div className='w-10/12 xl:w-[1152px] m-auto'>
      {props.children}
    </div>
  );
};