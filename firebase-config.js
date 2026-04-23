import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyA5_A6xsuNDL8y2ErpNJfDpS_s-JrSVDMg",
  authDomain: "vacation-manager-a9233.firebaseapp.com",
  projectId: "vacation-manager-a9233",
  storageBucket: "vacation-manager-a9233.firebasestorage.app",
  messagingSenderId: "33242163675",
  appId: "1:33242163675:web:d21b6d5bdb0027a71a9ffe"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 전역 상태와 연동하기 위해 window 객체에 필요한 함수를 연결합니다.
window.syncWithFirebase = function(state, onUpdate) {
  const docRef = doc(db, "data", "shared_state");

  // 1. 데이터베이스에서 내용이 바뀌면 내 화면도 업데이트 (실시간)
  onSnapshot(docRef, (docSnap) => {
    if (docSnap.exists()) {
      const remoteData = docSnap.data();
      onUpdate(remoteData);
    } else {
      // 서버에 데이터가 없으면 현재 로컬 데이터를 서버에 업로드
      setDoc(docRef, state);
    }
  });

  // 2. 내가 데이터를 바꿨을 때 서버에 업로드하는 함수
  window.saveToFirebase = async function(newState) {
    await setDoc(docRef, newState);
  };
};
