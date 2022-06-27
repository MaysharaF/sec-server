import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableWorkspace1655948684462 implements MigrationInterface {
    name = 'CreateTableWorkspace1655948684462'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workspace" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "owner_id" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "deleted_at" TIMESTAMP, CONSTRAINT "PK_ca86b6f9b3be5fe26d307d09b49" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "workspace" ADD CONSTRAINT "FK_988cf8ee530a5f8a2d56269955b" FOREIGN KEY ("owner_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workspace" DROP CONSTRAINT "FK_988cf8ee530a5f8a2d56269955b"`);
        await queryRunner.query(`DROP TABLE "workspace"`);
    }

}
