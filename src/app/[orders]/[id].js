// import Layout from "@/components/layout";
import { getOrderDetails, getOrderIdList } from "@/lib/orders";


export async function getStaticPaths() {
  const paths = await getOrderIdList();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const orderData = await getOrderDetails(params.id);
  return {
    props: {
      orderData,
    },
  };
}


export default function Order({ orderData }) {
  return (
    <div className='bg-gray-800 h-screen p-16 text-gray-100'>
      <div className='text-center font-bold text-3xl'>
        {postData.title}
      </div>
      <div className='text-justify my-8 text-gray-200'>
        {postData.description}
      </div>
      <div className="text-gray-400">
        Published On: {postData.date}
      </div>
    </div>
  );
}