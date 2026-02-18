import java.util.*;
class Anagrams{
public static List<List<String>> groupAnagrams(String[] strs)
{
	HashMap<String, List<String>> map = new HashMap<>();
	for (String word : strs){
		char[] chars = word.toCharArray();
		Arrays.sort(chars);
		String key = new String(chars);
		if(!map.containsKey(key)) {
			map.put(key, new ArrayList<>());
		}
		map.get(key).add(word);
	}
	return new ArrayList<>(map.values());
}
public static void main(String[] args){
	String[] input = {"eat","tae","ate"};
	
	List<List<String>> result = groupAnagrams(input);
	System.out.println(result);
}

}