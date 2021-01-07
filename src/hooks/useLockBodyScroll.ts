import { useLayoutEffect } from 'react'

// Usage
// function App(){
//   // State for our modal
//   const [modalOpen, setModalOpen] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setModalOpen(true)}>Show Modal</button>
//       <Content />
//       {modalOpen && (
//         <Modal
//           title="Try scrolling"
//           content="I bet you you can't! Muahahaha 😈"
//           onClose={() => setModalOpen(false)}
//         />
//       )}
//     </div>
//   );
// }

// function Modal({ title, content, onClose }){
//   // Call hook to lock body scroll
//   useLockBodyScroll();

//   return (
//     <div className="modal-overlay" onClick={onClose}>
//       <div className="modal">
//         <h2>{title}</h2>
//         <p>{content}</p>
//       </div>
//     </div>
//   );
// }

/**
 * 弹窗后，锁定主体滑动
 */
export function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, []) // Empty array ensures effect is only run on mount and unmount
}
