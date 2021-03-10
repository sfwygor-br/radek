function ConcatERemove(k, s, t){
	s = s.split('');
	t = t.split('');

	//desfaz string
	for (i = 0; i < k; i++){
		s.pop();
	}

	//refazendo string
	for (i = 0; i <= k; i++){
		s.push(t[s.length]);
	}
	
	s = s.join('');
	t = t.join('');
	
	if (s == t)
		console.log('Sim')
	else
		console.log('Não');
	
	console.log(t);
	console.log(s);
}

ConcatERemove(8, 'blablablabla', 'blablablabcde');
ConcatERemove(1, 'aba', 'aba');
ConcatERemove(2, 'ashley', 'ash');
ConcatERemove(15, 'teste 123 abc', 'teste 123 cde defghij');
ConcatERemove(50, 'teste 123 abc', 'teste 123 cde defghij');