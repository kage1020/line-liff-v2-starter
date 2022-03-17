import Head from "next/head";
import BasicTable from '../components/table';
import packageJson from "../package.json";

export default function Home(props) {
  /** You can access to liff and liffError object through the props.
   *  const { liff, liffError } = props;
   *  console.log(liff.getVersion());
   *
   *  Learn more about LIFF API documentation (https://developers.line.biz/en/reference/liff)
   **/
  return (
    <>
      <Head>
        <title>LIFF Starter</title>
      </Head>

      <div style={{margin: '100px'}}>
        <BasicTable liff={props.liff} />
      </div>
    </>
  );
}
