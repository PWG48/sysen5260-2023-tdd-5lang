.PHONY: test, clean

matmpy: matmpy.c
	gcc -g matmpy.c -o matmpy

result.csv: ./matmpy
	./matmpy /opt/data/mat_a.csv /opt/data/mat_b.csv > result.csv
	./matmpy /opt/data/mat_d.csv /opt/data/mat_e.csv > result2.csv

expected.csv: /opt/data/mat_c.csv
	cp /opt/data/mat_c.csv expected.csv
	dos2unix expected.csv
	cp /opt/data/mat_f.csv expected2.csv
	dos2unix expected2.csv	

result2.csv: ./matmpy
	./matmpy /opt/data/mat_d.csv /opt/data/mat_e.csv > result2.csv

expected2.csv: /opt/data/mat_f.csv
	cp /opt/data/mat_f.csv expected2.csv
	dos2unix expected2.csv	

test: result.csv expected.csv
	diff expected.csv result.csv
	@echo "PASS"
	diff expected2.csv result2.csv
	@echo "PASS"

clean:
	rm -f *.o matmpy result.csv expected.csv result2.csv expected2.csv
