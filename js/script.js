function getCheckedCnt()  {
    // 선택된 목록 가져오기
    const query = 'input[name="movie"]:checked';
    const selectedElements = document.querySelectorAll(query);
    const value = document.getElementById('info').value;
    //
    // 선택된 목록의 갯수 세기
    const selectedElementsCnt = selectedElements.length;
    //
    // 출력
    alert(value + '님, 저와 ' + selectedElementsCnt + '개의 취향이 같으시네요!')
}