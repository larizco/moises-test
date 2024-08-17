export default function Wrapper(props: any) {
  return (
    <div className='max-w-[1152px] m-auto'>
      {props.children}
    </div>
  );
};