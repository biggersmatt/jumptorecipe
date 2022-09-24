import TestList from "./TestList";
import TestHeader from "./testHeader";
import './test.css';

export default function Test() {
  return (
    <div className="page-wrapper">
      <TestHeader />
      <TestList />
    </div>
  )
}