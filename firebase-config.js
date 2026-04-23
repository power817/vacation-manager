<!DOCTYPE html>
<html>
<head>
    <title>휴가 관리자</title>
</head>
<body>
    <div id="calendar"></div>

    <script type="module">
        import { initializeApp } from "firebase/app";
        import { getFirestore, collection, addDoc, onSnapshot } from "firebase/firestore";

        // 제공해주신 Firebase 설정값
        const firebaseConfig = {
            apiKey: "AIzaSy...",
            authDomain: "vacation-manager-...",
            projectId: "vacation-manager-...",
            storageBucket: "...",
            messagingSenderId: "...",
            appId: "..."
        };

        // 초기화
        const app = initializeApp(firebaseConfig);
        const db = getFirestore(app);

        // 이후 여기에 일정 추가/불러오기 로직 작성
    </script>
</body>
</html>
